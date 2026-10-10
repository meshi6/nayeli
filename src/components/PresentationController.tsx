"use client";

import { useEffect } from "react";

// The demo timeline runs on T = 0..100, driven by scroll progress through #demo.
// Stage boundaries (T): home 0, talk 10, call 25, work 45, home-after 80.
const STAGE_STARTS = [0, 10, 25, 45, 80];
const INTRO_SECONDS = 15;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function applyDemo(T: number) {
  const phone = document.getElementById("phone");
  if (!phone) return;

  const stage = T < 10 ? 0 : T < 25 ? 1 : T < 45 ? 2 : T < 80 ? 3 : 4;
  const screen = ["home", "talk", "call", "work", "home"][stage];
  if (phone.dataset.screen !== screen) phone.dataset.screen = screen;

  phone.classList.toggle("after", T >= 80);
  phone.classList.toggle("heard", T >= 11);
  phone.classList.toggle("replied", T >= 15);
  phone.classList.toggle("notif-on", T >= 80 && T < 93);

  // talk
  const status = document.getElementById("talkStatus");
  const talkOrb = document.getElementById("talkOrb");
  if (status) status.textContent = T < 11 ? "Te escucho…" : T < 15 ? "Pensando…" : "Nayeli está hablando";
  talkOrb?.classList.toggle("thinking", T >= 11 && T < 15);
  talkOrb?.classList.toggle("speaking", T >= 15);

  // call with Rosa: call clock 0..12.5 across T 25..45
  const cw = clamp(((T - 25) / 20) * 12.5, 0, 12.5);
  const callEnded = cw >= 11;
  phone.classList.toggle("callend", callEnded);
  phone.querySelectorAll<HTMLElement>(".line").forEach((el) => {
    el.classList.toggle("shown", cw >= Number(el.dataset.wt));
  });
  const secs = Math.floor(Math.min(cw, 11) * 6);
  const clock = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  const callStatus = document.getElementById("callStatus");
  if (callStatus) callStatus.textContent = `${callEnded ? "Llamada terminada" : "En llamada"} · ${clock}`;
  document.getElementById("wave")?.classList.toggle("still", callEnded);
  document.getElementById("callOrb")?.classList.toggle("still", callEnded);

  // work: task clock 11..25 across T 45..80
  const ww = T < 45 ? 11 : clamp(11 + ((T - 45) / 35) * 14, 11, 25);
  let caption = "Todo listo, Diego. Que te vaya bien en la escuela.";
  let allDone = true;
  phone.querySelectorAll<HTMLElement>(".step").forEach((el) => {
    const s = Number(el.dataset.s);
    const e = Number(el.dataset.e);
    const active = ww >= s && ww < e;
    el.classList.toggle("shown", ww >= s);
    el.classList.toggle("active", active);
    if (active) {
      caption = el.dataset.cap ?? caption;
      allDone = false;
    } else if (ww < s) {
      allDone = false;
    }
  });
  const cap = document.getElementById("workCap");
  const title = document.getElementById("workTitle");
  if (cap) cap.textContent = caption;
  if (title) title.textContent = allDone ? "Todo resuelto" : "Nayeli está trabajando";
  document.getElementById("workOrb")?.classList.toggle("still", allDone);

  // narrative + agent log
  document.querySelectorAll<HTMLElement>(".story").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.stage) === stage);
  });
  document.querySelectorAll<HTMLElement>(".stagebar span").forEach((el, i) => {
    el.classList.toggle("on", i <= stage);
  });
  document.querySelectorAll<HTMLElement>(".logbody li").forEach((el) => {
    el.classList.toggle("shown", T >= Number(el.dataset.t));
  });
}

export default function PresentationController() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section.sec"));
    const demo = document.getElementById("demo");
    const cleanups: Array<() => void> = [];

    // section dots
    const nav = document.querySelector<HTMLElement>("nav.dots");
    const dots = sections.map((sec) => {
      const a = document.createElement("a");
      a.href = `#${sec.id}`;
      a.setAttribute("aria-label", sec.dataset.title ?? sec.id);
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.scrollTo({ top: sec.offsetTop, behavior: "smooth" });
      });
      nav?.appendChild(a);
      return a;
    });
    cleanups.push(() => dots.forEach((d) => d.remove()));

    // reveal on enter
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
      { threshold: 0.2 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // phone scale
    const scaler = document.querySelector<HTMLElement>(".phone-scale");
    const fit = () => {
      if (!scaler) return;
      const narrow = window.innerWidth <= 1000;
      const avail = narrow ? window.innerHeight * 0.62 : window.innerHeight * 0.9;
      scaler.style.setProperty("--s", String(Math.min(1, avail / 844)));
    };

    // scroll → demo timeline + active dot
    const demoT = () => {
      if (!demo) return 0;
      const span = demo.offsetHeight - window.innerHeight;
      return clamp(((window.scrollY - demo.offsetTop) / span) * 100, 0, 100);
    };
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        applyDemo(demoT());
        const mid = window.scrollY + window.innerHeight / 2;
        let idx = 0;
        sections.forEach((s, i) => { if (s.offsetTop <= mid) idx = i; });
        dots.forEach((d, i) => d.classList.toggle("on", i === idx));
        nav?.classList.toggle("dark", sections[idx]?.id === "intro");
      });
    };
    const onResize = () => { fit(); onScroll(); };
    fit();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    });

    // autoplay through the demo
    let auto = 0;
    const stopAuto = () => { cancelAnimationFrame(auto); auto = 0; };
    const playBtn = document.getElementById("autoplay");
    const startAuto = () => {
      if (!demo) return;
      stopAuto();
      const from = demo.offsetTop;
      const to = demo.offsetTop + demo.offsetHeight - window.innerHeight;
      const startT = clamp(demoT(), 0, 99) / 100;
      const duration = 75000 * (1 - startT);
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        window.scrollTo(0, from + (to - from) * (startT + (1 - startT) * p));
        if (p < 1) auto = requestAnimationFrame(step);
        else auto = 0;
      };
      auto = requestAnimationFrame(step);
    };
    playBtn?.addEventListener("click", startAuto);
    const userInterrupt = () => { if (auto) stopAuto(); };
    window.addEventListener("wheel", userInterrupt, { passive: true });
    window.addEventListener("touchstart", userInterrupt, { passive: true });
    cleanups.push(() => {
      stopAuto();
      playBtn?.removeEventListener("click", startAuto);
      window.removeEventListener("wheel", userInterrupt);
      window.removeEventListener("touchstart", userInterrupt);
    });

    // presenter keys: → / ← jump between beats (section tops + demo stages)
    const beats = () => {
      const list: number[] = [];
      sections.forEach((s) => {
        if (s === demo && demo) {
          const span = demo.offsetHeight - window.innerHeight;
          STAGE_STARTS.forEach((t) => list.push(demo.offsetTop + (span * (t === 0 ? 0 : t + 1)) / 100));
        } else {
          list.push(s.offsetTop);
        }
      });
      return list;
    };
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
      ev.preventDefault();
      stopAuto();
      const y = window.scrollY;
      const list = beats();
      const target = ev.key === "ArrowRight"
        ? list.find((b) => b > y + 4)
        : [...list].reverse().find((b) => b < y - 4);
      if (target !== undefined) window.scrollTo({ top: target, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    cleanups.push(() => window.removeEventListener("keydown", onKey));

    // intro: real video if public/intro.mp4 exists, otherwise the caption film
    const film = document.getElementById("film");
    const video = document.getElementById("introVideo") as HTMLVideoElement | null;
    const source = video?.querySelector("source");
    const playIntro = document.getElementById("playIntro");
    let hasVideo = false;
    const onMeta = () => { hasVideo = true; film?.classList.add("has-video"); };
    video?.addEventListener("loadedmetadata", onMeta);
    if (video && video.readyState >= 1) onMeta();
    const onSourceError = () => { hasVideo = false; };
    source?.addEventListener("error", onSourceError);

    const caps = Array.from(document.querySelectorAll<HTMLElement>("#fallback .cap"));
    let filmRaf = 0;
    const runFallback = () => {
      cancelAnimationFrame(filmRaf);
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = (now - t0) / 1000;
        caps.forEach((c, i) => {
          const at = Number(c.dataset.at);
          const next = i < caps.length - 1 ? Number(caps[i + 1].dataset.at) : Infinity;
          c.classList.toggle("show", t >= at && t < next - 0.35);
        });
        if (t < INTRO_SECONDS) filmRaf = requestAnimationFrame(tick);
        else film?.classList.remove("playing");
      };
      filmRaf = requestAnimationFrame(tick);
    };
    const onPlay = () => {
      film?.classList.add("playing");
      if (hasVideo && video) {
        video.currentTime = 0;
        void video.play();
      } else {
        runFallback();
      }
    };
    const onEnded = () => film?.classList.remove("playing");
    playIntro?.addEventListener("click", onPlay);
    video?.addEventListener("ended", onEnded);
    cleanups.push(() => {
      cancelAnimationFrame(filmRaf);
      playIntro?.removeEventListener("click", onPlay);
      video?.removeEventListener("ended", onEnded);
      video?.removeEventListener("loadedmetadata", onMeta);
      source?.removeEventListener("error", onSourceError);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
