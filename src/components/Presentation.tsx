// Presentation markup. Behaviour lives in PresentationController.
import Image from "next/image";

export default function Presentation() {
  return (
    <>


<nav className="dots" aria-label="Sections"></nav>

{/* 0 · TITLE */}
<section className="sec title" id="title" data-title="Nayeli">
  <div className="wrap">
    <p className="eyebrow">Assistant + Scribe for Spanish-speaking Families in the US</p>
    <h1 className="mega">Nayeli</h1>
    <p className="lede">Nayeli gives Spanish-speaking parents the language support they need, <em>so kids can be kids and focus on school instead of parenting.</em></p>
    <p className="es">Nayeli helps prevent language-brokering burnout, parentification and anxiety in children.</p>
    <div className="toplinks"><a className="btn dark" href="https://www.youtube.com/watch?v=kvechgOQf6w" target="_blank" rel="noopener">Watch the demo video ↗</a><a className="btn ghost" href="https://nayeli-care-buddy.base44.app" target="_blank" rel="noopener">Try the app ↗</a></div>
  </div>
  <div className="sheet" aria-hidden="true">
    <svg className="cut" viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="M0 0 H1440 V24 C1180 24 1120 86 900 86 L540 86 C320 86 260 24 0 24 Z"></path></svg>
    <span className="orb xl"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
  </div>
</section>

{/* 1 · INTRO VIDEO */}
<section className="sec intro" id="intro" data-title="Intro">
  <div className="film" id="film">
    <video id="introVideo" playsInline preload="metadata">
      <source src="/intro.mp4" type="video/mp4" />
    </video>
    <div className="fallback" id="fallback" aria-live="polite">
      <p className="cap" data-at="0">7:40 AM.</p>
      <p className="cap" data-at="2.2">Diego is eleven. He should be leaving for school.</p>
      <p className="cap" data-at="5.4">Instead, he’s on hold. Translating. Rescheduling. Again.</p>
      <p className="cap" data-at="9.4">His mom doesn’t need a translator.<br />She needs someone to handle it.</p>
      <div className="cap end" data-at="12.4"><span className="orb lg speaking" aria-hidden="true"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span><span>Meet Nayeli.</span></div>
    </div>
    <div className="poster" aria-hidden="true">
      <span className="plabel">Intro · 0:15</span>
      <span className="orb lg pposter"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
      <div className="ptext"><span className="pclock">7:40 AM</span><span className="pplace">Brooklyn, NY</span></div>
    </div>
    <button className="play" id="playIntro" aria-label="Play intro"><svg className="si" width="42" height="42" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"></path></svg></button>
  </div>
  <a className="scrollcue" href="#problem">Scroll <svg className="si" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg></a>
</section>

{/* 2 · PROBLEM */}
<section className="sec problem" id="problem" data-title="Problem">
  <div className="wrap grid2">
    <div>
      <p className="eyebrow coral">The problem</p>
      <h2 className="h2">Diego is 11. He’s also his mom’s interpreter, scheduler, pharmacist and ride coordinator.</h2>
      <p className="body">In countless Hispanic households, the child who speaks English becomes the household’s healthcare admin. They miss class to make calls, sit on hold before the first bell, and carry diagnoses no kid should have to translate.</p>
    </div>
    <div className="jobs reveal">
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 34 V11 H33 V34"></path><path d="M4 34 H36"></path><path d="M20 15 V25 M15 20 H25"></path><path d="M16 34 V29 H24 V34"></path></svg><span>Calling the clinic</span></div>
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 10 H33 V34 H7 Z"></path><path d="M7 16 H33"></path><path d="M13 6 V12 M27 6 V12"></path></svg><span>Rescheduling</span></div>
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 30 V15 H25 L31 21 H36 V30 H4"></path><path d="M8 15 V21 H24 V15"></path><path d="M8 30 a3 3 0 1 0 6 0"></path><path d="M26 30 a3 3 0 1 0 6 0"></path></svg><span>Booking rides</span></div>
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 26 L22 12 a6 6 0 0 1 8 8 L16 34 a6 6 0 0 1 -8 -8 Z"></path><path d="M15 19 L23 27"></path></svg><span>Tracking pills</span></div>
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M6 8 H34 V26 H18 L10 33 V26 H6 Z"></path><path d="M12 15 H28 M12 20 H22"></path></svg><span>Translating diagnoses</span></div>
      <div className="job"><svg className="ic" viewBox="0 0 40 40" aria-hidden="true"><path d="M5 19 L20 7 L35 19"></path><path d="M9 16 V33 H31 V16"></path><path d="M17 33 V24 H23 V33"></path></svg><span>Updating the family</span></div>
    </div>
  </div>
  <div className="wrap stats reveal">
    <div className="stat"><div className="n">≈26M</div><div className="t">people in the U.S. have limited English proficiency</div><div className="src">U.S. Census Bureau, American Community Survey</div></div>
    <div className="stat"><div className="n">6 in 10</div><div className="t">of them speak Spanish at home</div><div className="src">U.S. Census Bureau, American Community Survey</div></div>
    <div className="stat"><div className="n">20%</div><div className="t">of child language brokers suffer clinical distress</div></div>
  </div>
</section>

{/* 3 · MEET NAYELI */}
<section className="sec meet" id="meet" data-title="Nayeli">
  <div className="wrap">
    <p className="eyebrow coral">Meet Nayeli</p>
    <h2 className="h2 narrow">Not a translator. A care agent who does the work, in Spanish and English, by voice calls.</h2>
    <div className="pillars">
      <article className="pillar sky reveal">
        <span className="orb sm"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
        <h3>Voice first</h3>
        <p>Diego says it once, in Spanish or English. No forms, no menus, big tap targets for Rosa.</p>
      </article>
      <article className="pillar sage reveal">
        <svg className="ic big" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 34 H36"></path><path d="M7 34 V29 H33 V34"></path><path d="M11 29 V24 H29 V29"></path><path d="M15 24 V19 H25 V24"></path><path d="M18 19 V14 H22 V19"></path><path d="M20 14 V9"></path></svg>
        <h3>Does the work</h3>
        <p>She places real phone calls, finds slots, books rides and keeps the medication list straight.</p>
      </article>
      <article className="pillar lav reveal">
        <svg className="ic big" viewBox="0 0 40 40" aria-hidden="true"><path d="M3 12 L15 17"></path><path d="M15 17 L22 13 L29 14 L37 12 L30 17"></path><path d="M30 17 L26 23 L17 27 L11 35"></path><path d="M17 27 L16 17"></path><path d="M17 18 L21 6 L26 14"></path></svg>
        <h3>Keeps everyone in the loop</h3>
        <p>Every change shows up live for the family, with a text to Rosa and Diego when it’s done.</p>
      </article>
    </div>
  </div>
</section>

{/* 4 · DEMO (scroll-driven) */}
<section className="sec demo" id="demo" data-title="Demo">
  <div className="sticky">
    <div className="demo-left">
      <div className="demo-head">
        <p className="eyebrow coral">Demo</p>
        <div className="stagebar" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
      <div className="stories">
        <div className="story" data-stage="0">
          <div className="clock">7:40 AM</div>
          <h3>Rosa wakes up dizzy. Diego has a math test at 8.</h3>
          <p>Her cardiology appointment is at 10:30 today.</p>
        </div>
        <div className="story" data-stage="1">
          <div className="clock">7:41 AM</div>
          <h3>Diego says it once, in Spanish.</h3>
          <p>Nayeli understands, confirms out loud, and tells him to go to school.</p>
          <div className="chips"><span className="chip">ElevenLabs Conversational AI</span></div>
        </div>
        <div className="story" data-stage="2">
          <div className="clock">7:41 AM</div>
          <h3>First, she calls Rosa.</h3>
          <p>A real phone call, in Spanish. She checks for red-flag symptoms before touching the calendar.</p>
          <div className="chips"><span className="chip">Twilio Voice</span><span className="chip">ElevenLabs voice</span></div>
        </div>
        <div className="story" data-stage="3">
          <div className="clock">7:42 AM</div>
          <h3>Then she does the admin.</h3>
          <p>Calls the clinic, rebooks Thursday 2:00 PM, moves the ride, texts the family.</p>
          <div className="chips"><span className="chip">Twilio Voice</span><span className="chip">Twilio SMS</span></div>
        </div>
        <div className="story" data-stage="4">
          <div className="clock">7:45 AM</div>
          <h3>Diego makes his math test.</h3>
          <p>Rosa gets her appointment. Everyone sees what changed, without a single phone call from the family.</p>
        </div>
      </div>
      <div className="log" aria-label="Nayeli's agent log">
        <div className="loghead"><span className="livedot"></span>Inner workings · agent log</div>
        <ol className="logbody">
          <li data-t="11"><b>listen</b> es-MX · “Mi mamá no se siente bien y necesita cambiar su cita.”</li>
          <li data-t="13"><b>intent</b> reschedule_appointment · patient: Rosa · appt: Dr. Patel, today 10:30</li>
          <li data-t="14"><b>plan</b> 1 check on Rosa → 2 call clinic → 3 rebook → 4 move ride → 5 notify family</li>
          <li data-t="15"><b>speak</b> elevenlabs · “Entendido, Diego. Yo me encargo…”</li>
          <li data-t="26"><b>call</b> twilio.calls.create → Rosa · voice agent: nayeli-es</li>
          <li data-t="43"><b>summary</b> dizzy since last night · no chest pain · prefers Thursday · escalation: none</li>
          <li data-t="46"><b>call</b> twilio.calls.create → Dr. Patel’s office</li>
          <li data-t="57"><b>slots</b> Thu 2:00 PM · Fri 9:00 AM · Fri 3:30 PM</li>
          <li data-t="63"><b>book</b> appointment.reschedule → Thu 2:00 PM <span className="ok">ok</span></li>
          <li data-t="67"><b>ride</b> transport.update → pickup Thu 1:15 PM <span className="ok">ok</span></li>
          <li data-t="74"><b>sms</b> twilio.messages.create → Rosa, Diego <span className="ok">delivered</span></li>
          <li data-t="80"><b>sync</b> family feed · 6 tasks done</li>
        </ol>
      </div>
      <div className="demo-actions">
        <a className="btn ghost" href="https://nayeli-care-buddy.base44.app" target="_blank" rel="noopener">Open the live app</a>
        <a className="btn ghost" href="https://www.youtube.com/watch?v=kvechgOQf6w" target="_blank" rel="noopener">Watch the demo video ↗</a>
      </div>
    </div>

    <div className="demo-right">
      <div className="phone-scale">
        <div className="phone" id="phone" data-screen="home">

          {/* HOME */}
          <div className="screen s-home">
            <header className="top">
              <div className="who"><div className="avatar av-d" aria-hidden="true">D</div><span>Hola, Diego</span></div>
              <div className="lang"><span className="on">ES</span><span>EN</span></div>
            </header>
            <h4 className="h1p">Mamá hoy</h4>
            <section className="card sky">
              <div className="row">
                <div className="icircle"><svg className="ic" width="34" height="34" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 33 L7 20 L7 13 L12 8 L17 8 L20 11 L23 8 L28 8 L33 13 L33 20 Z"></path><path d="M11 20 H15 L17 16 L21 24 L23 20 H29"></path></svg></div>
                <div className="lbl">Cardiología · Dr. Patel</div>
              </div>
              <div className="apptfoot">
                <div>
                  <div className="chipk only-moved"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Reprogramada por Nayeli</div>
                  <div className="bigtime only-moved"><span className="day">Jueves</span>2:00 <span className="ampm">PM</span></div>
                  <div className="bigtime only-orig"><span className="day">Hoy</span>10:30 <span className="ampm">AM</span></div>
                </div>
                <span className="rbtn" aria-hidden="true"><svg className="si" width="22" height="22" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg></span>
              </div>
            </section>
            <div className="tiles">
              <div className="tile sage"><div className="k">Medicinas</div><div className="pills"><span className="gp g"></span><span className="gp p"></span><span className="gp b"></span></div><div className="v">2 de 3 hoy</div></div>
              <div className="tile butter"><div className="k">Transporte</div><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 30 V15 H25 L31 21 H36 V30 H4"></path><path d="M8 15 V21 H24 V15"></path><path d="M7 11 H22 M10 11 V15 M19 11 V15"></path><path d="M8 30 a3 3 0 1 0 6 0"></path><path d="M26 30 a3 3 0 1 0 6 0"></path></svg><div className="v"><span className="only-ride">Recogida jue 1:15 PM</span><span className="only-noride">Sin reservar</span></div></div>
            </div>
            <div className="soon"><div className="t">Próximamente</div><span className="p">Chequeo de síntomas</span><span className="p">Foto de medicamentos</span><span className="p">Voz familiar</span><span className="p">Red comunitaria</span></div>
            <div className="psheet">
              <svg className="pcut" width="390" height="40" viewBox="0 0 390 40" aria-hidden="true"><path d="M0 0 H390 V12 C340 12 330 36 270 36 L120 36 C60 36 50 12 0 12 Z"></path></svg>
              <span className="orb md"><span className="ring"></span><span className="ring r2"></span><span className="core"><svg className="si" width="34" height="34" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"></path><path d="M5 11a7 7 0 0 0 14 0"></path><path d="M12 18v3"></path></svg></span></span>
              <div className="cta">Habla con Nayeli</div>
              <div className="ctasub only-notdone">Toca y cuéntale qué necesitas</div>
              <div className="didchip only-done">Ver lo que hizo Nayeli</div>
            </div>
          </div>

          {/* TALK */}
          <div className="screen s-talk">
            <div className="bar"><span className="circbtn"><svg className="si" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg></span><div className="bartitle">Nayeli</div><span className="spacer"></span></div>
            <span className="orb big" id="talkOrb"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
            <p className="status" id="talkStatus">Te escucho…</p>
            <div className="caps">
              <div className="bub me only-heard"><div className="w">Diego</div><div className="m">Mi mamá no se siente bien y necesita cambiar su cita.</div><div className="s">My mom isn’t feeling well and needs to change her appointment.</div></div>
              <div className="bub only-replied"><div className="w">Nayeli</div><div className="m">Entendido, Diego. Yo me encargo. Primero llamo a tu mamá. Tú ve tranquilo a la escuela.</div><div className="s">Got it, Diego. I’ll handle it. First I’ll call your mom. Head to school, don’t worry.</div></div>
            </div>
          </div>

          {/* CALL */}
          <div className="screen s-call">
            <div className="bar"><span className="circbtn"><svg className="si" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg></span><div className="bartitle dark">Llamada en vivo</div><span className="spacer"></span></div>
            <div className="parties">
              <div className="pav"><span className="orb mini speaking" id="callOrb"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>Nayeli</div>
              <div className="pdots"></div>
              <div className="pav"><div className="avatar av-r">RM</div>Rosa</div>
            </div>
            <div className="cstatus" id="callStatus">En llamada · 0:00</div>
            <div className="wavepill" id="wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <div className="tx">
              <div className="summary only-callend"><div className="w">Resumen de Nayeli</div><div className="m">Rosa está mareada y cansada desde anoche. Sin dolor de pecho. Prefiere el jueves.</div><div className="safe">Si empeora o tiene dolor de pecho: llamar al 911.</div></div>
              <div className="line rosa" data-wt="9.6"><div className="w">Rosa</div><div className="m">Sí, el jueves está bien. Gracias, mija.</div><div className="s">Yes, Thursday is fine. Thank you, dear.</div></div>
              <div className="line nayeli" data-wt="8"><div className="w">Nayeli</div><div className="m">Entonces le cambio la cita con el Dr. Patel. ¿El jueves le queda bien?</div><div className="s">Then I’ll move your appointment. Does Thursday work?</div></div>
              <div className="line rosa" data-wt="6.2"><div className="w">Rosa</div><div className="m">No, nada de eso. Solo cansancio.</div><div className="s">No, none of that. Just tired.</div></div>
              <div className="line nayeli" data-wt="4.4"><div className="w">Nayeli</div><div className="m">Lo siento mucho. ¿Tiene dolor de pecho o le falta el aire?</div><div className="s">I’m so sorry. Any chest pain or shortness of breath?</div></div>
              <div className="line rosa" data-wt="2.6"><div className="w">Rosa</div><div className="m">Ay, mija, me siento mareada y cansada desde anoche.</div><div className="s">Oh, dear, I’ve felt dizzy and tired since last night.</div></div>
              <div className="line nayeli" data-wt="0.8"><div className="w">Nayeli</div><div className="m">Hola Rosa, soy Nayeli. Diego me dijo que no se siente bien. ¿Cómo está?</div><div className="s">Hi Rosa, it’s Nayeli. Diego said you’re not feeling well. How are you?</div></div>
            </div>
            <div className="cbar"><span className="pbtn">Tomar la llamada</span></div>
          </div>

          {/* WORK */}
          <div className="screen s-work">
            <div className="whead">
              <span className="circbtn"><svg className="si" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg></span>
              <div className="row">
                <span className="orb mini speaking" id="workOrb"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
                <div><div className="wtitle" id="workTitle">Nayeli está trabajando</div><div className="wcap" id="workCap">Ahora llamo al Dr. Patel.</div></div>
              </div>
              <svg className="wcut" width="390" height="32" viewBox="0 0 390 32" aria-hidden="true"><path d="M0 32 V24 C70 24 80 8 150 8 H240 C310 8 320 24 390 24 V32 Z"></path></svg>
            </div>
            <div className="steps">
              <div className="step lav" data-s="22" data-e="24.4" data-cap="Les mando un mensaje a los dos.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M3 12 L15 17"></path><path d="M15 17 L22 13 L29 14 L37 12 L30 17"></path><path d="M30 17 L26 23 L17 27 L11 35"></path><path d="M17 27 L16 17"></path><path d="M17 18 L21 6 L26 14"></path></svg></div>
                <div className="stbody"><div className="sttitle">Enviando SMS a Rosa y Diego</div><div className="stsub a">Confirmando por mensaje</div><div className="stsub d">Entregado a los dos</div></div>
                <div className="stmeta"><div className="time">7:44 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
              <div className="step butter" data-s="19" data-e="22" data-cap="Le aviso al transporte.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 30 V15 H25 L31 21 H36 V30 H4"></path><path d="M8 15 V21 H24 V15"></path><path d="M7 11 H22 M10 11 V15 M19 11 V15"></path><path d="M8 30 a3 3 0 1 0 6 0"></path><path d="M26 30 a3 3 0 1 0 6 0"></path></svg></div>
                <div className="stbody"><div className="sttitle">Avisando al transporte</div><div className="stsub a">Reservando el viaje</div><div className="stsub d">Recogida: jueves 1:15 PM</div></div>
                <div className="stmeta"><div className="time">7:43 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
              <div className="step sage" data-s="18" data-e="18.6" data-cap="Listo: jueves a las 2:00 PM.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 10 H33 V34 H7 Z"></path><path d="M7 16 H33"></path><path d="M13 6 V12 M27 6 V12"></path><path d="M14 25 L18 29 L27 20"></path></svg></div>
                <div className="stbody"><div className="sttitle">Cita reprogramada</div><div className="flip"><span className="old">Hoy 10:30 AM</span><svg className="si" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg><span className="new">Jue 2:00 PM</span></div></div>
                <div className="stmeta"><div className="time">7:43 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
              <div className="step sage" data-s="15" data-e="18" data-cap="Busco un horario que le quede bien.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 34 H36"></path><path d="M7 34 V29 H33 V34"></path><path d="M11 29 V24 H29 V29"></path><path d="M15 24 V19 H25 V24"></path><path d="M18 19 V14 H22 V19"></path><path d="M20 14 V9"></path></svg></div>
                <div className="stbody"><div className="sttitle">Buscando horarios</div><div className="stsub a">Revisando esta semana</div><div className="stsub d">3 opciones · elegí jueves</div></div>
                <div className="stmeta"><div className="time">7:42 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
              <div className="step sky" data-s="11" data-e="15" data-cap="Ahora llamo al Dr. Patel.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 34 V11 H33 V34"></path><path d="M4 34 H36"></path><path d="M20 15 V25 M15 20 H25"></path><path d="M16 34 V29 H24 V34"></path></svg></div>
                <div className="stbody"><div className="sttitle">Llamando al consultorio del Dr. Patel</div><div className="stsub a">Pidiendo un nuevo horario</div><div className="stsub d">Recepción confirmó el cambio</div></div>
                <div className="stmeta"><div className="time">7:42 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
              <div className="step sky" data-s="0" data-e="11" data-cap="Estoy hablando con tu mamá.">
                <div className="icbox"><svg className="ic" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M5 19 L20 7 L35 19"></path><path d="M9 16 V33 H31 V16"></path><path d="M17 33 V24 H23 V33"></path><path d="M12 21 H15 M25 21 H28"></path></svg></div>
                <div className="stbody"><div className="sttitle">Llamada con Rosa</div><div className="stsub a">Para saber cómo se siente</div><div className="stsub d">Mareada desde anoche · prefiere el jueves</div></div>
                <div className="stmeta"><div className="time">7:41 AM</div><span className="live"><span className="dot"></span>En curso</span><span className="donec"><svg className="si" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span></div>
              </div>
            </div>
          </div>

          <div className="notif" role="status">
            <div className="nb"><svg className="ic" width="32" height="32" viewBox="0 0 40 40" aria-hidden="true"><path d="M3 12 L15 17"></path><path d="M15 17 L22 13 L29 14 L37 12 L30 17"></path><path d="M30 17 L26 23 L17 27 L11 35"></path><path d="M17 27 L16 17"></path><path d="M17 18 L21 6 L26 14"></path></svg></div>
            <div><div className="nt">Nayeli · ahora</div><div className="nm">La cita de mamá ahora es el jueves a las 2:00 PM. Recogida a la 1:15 PM.</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 5 · THREE MOMENTS */}
<section className="sec moments" id="moments" data-title="Moments">
  <div className="wrap">
    <p className="eyebrow coral">Three moments, one agent</p>
    <h2 className="h2 narrow">Nayeli shows up before, during, and after visits.</h2>
    <div className="mgrid">
      <article className="moment sky reveal">
        <div className="mnum">01</div>
        <h3>“She doesn’t feel well.”</h3>
        <p>Diego asks once. Nayeli calls Rosa, screens for red flags, reschedules with Dr. Patel and tells everyone.</p>
        <div className="quote"><span>Diego</span>“Mi mamá no se siente bien y necesita cambiar su cita.”</div>
      </article>
      <article className="moment butter reveal">
        <div className="mnum">02</div>
        <h3>Nayeli schedules transportation.</h3>
        <div className="quote"><span>Nayeli</span>“¿Tiene transporte para su cita?”</div>
        <div className="quote r"><span>Rosa</span>“No.”</div>
        <div className="result"><svg className="si" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Pickup scheduled · Thu 1:15 PM</div>
      </article>
      <article className="moment sage reveal">
        <div className="mnum">03</div>
        <h3>In the exam room.</h3>
        <p>Nayeli listens, then gives Rosa a plain-Spanish summary, an updated medication list, and books the referral.</p>
        <ul className="meds">
          <li><span className="gp g"></span><b>Metformina 500 mg</b><span>2 veces al día</span></li>
          <li><span className="gp p"></span><b>Lisinopril 10 mg</b><span>1 vez · mañana</span></li>
          <li><span className="gp b on"></span><b>Atorvastatina 20 mg</b><span>1 vez · noche</span></li>
        </ul>
        <div className="todo"><span>Recoger receta nueva</span><span>Tomar la presión todos los días a las 11 AM</span></div>
      </article>
    </div>
  </div>
</section>

{/* 6 · HOW IT WORKS */}
<section className="sec how" id="how" data-title="How it works">
  <div className="wrap">
    <p className="eyebrow coral archlabel">How it works</p>
    <h2 className="h2 narrow archhead">The stack.</h2>
    <div className="arch reveal">
      <div className="col">
        <div className="node white"><div className="nk">Family</div><div className="nv">Diego · Rosa</div><p>Talk in Spanish or English, in the app or by phone.</p></div>
      </div>
      <div className="arrow" aria-hidden="true"><svg className="si" viewBox="0 0 48 24"><path d="M2 12h42"></path><path d="M36 5l8 7-8 7"></path></svg></div>
      <div className="col">
        <div className="node coral"><div className="nk">ElevenLabs</div><div className="nv">Conversational AI</div><p>Nayeli’s voice. Real-time speech in and out, bilingual.</p></div>
        <div className="node ink"><div className="nk">Agent core</div><div className="nv">Intent → plan → act</div><p>Rosa’s care profile: appointments, meds, contacts, preferences.</p></div>
      </div>
      <div className="arrow" aria-hidden="true"><svg className="si" viewBox="0 0 48 24"><path d="M2 12h42"></path><path d="M36 5l8 7-8 7"></path></svg></div>
      <div className="col tools">
        <div className="node sky"><div className="nk">Twilio Voice</div><p>Outbound calls to Rosa and clinics</p></div>
        <div className="node lav"><div className="nk">Twilio SMS</div><p>Confirmations to the family</p></div>
        <div className="node sage"><div className="nk">Scheduling</div><p>Find slots, rebook, referrals</p></div>
        <div className="node butter"><div className="nk">Transport</div><p>Book and move rides</p></div>
      </div>
      <div className="arrow" aria-hidden="true"><svg className="si" viewBox="0 0 48 24"><path d="M2 12h42"></path><path d="M36 5l8 7-8 7"></path></svg></div>
      <div className="col">
        <div className="node white"><div className="nk">Family feed</div><div className="nv">Live updates</div><p>Every action, transcript and summary, as it happens.</p></div>
      </div>
    </div>
    <div className="stack reveal">
      <div className="tech coral"><div className="tn">ElevenLabs</div><div className="tp">Conversational AI</div><p>Nayeli’s real-time voice, in Spanish and English.</p></div>
      <div className="tech sky"><div className="tn">Twilio</div><div className="tp">Voice + SMS</div><p>Outbound calls to patients and clinics, texts to the family.</p></div>
      <div className="tech sage"><div className="tn">Base44</div><div className="tp">Nayeli app</div><p>The family dashboard and care task list.</p></div>
      <div className="tech lav"><div className="tn">Next.js + Vercel</div><div className="tp">This site</div><p>The pitch you’re scrolling, at nayeli.gtm0.com.</p></div>
    </div>
    <div className="buildnote reveal"><b>In this build:</b> ElevenLabs voice and Twilio calls &amp; texts are live. Clinic scheduling and ride booking are simulated.</div>
  </div>
</section>

{/* 7 · TRUST */}
<section className="sec trust" id="trust" data-title="Trust">
  <div className="wrap grid2">
    <div>
      <p className="eyebrow coral">Trust and Empathy</p>
      <h2 className="h2">Nayeli handles logistics. The family stays in charge.</h2>
    </div>
    <ul className="tlist reveal">
      <li><b>Listen in or take over</b> any call, with one tap.</li>
      <li><b>Red flags escalate.</b> Chest pain or trouble breathing means “call 911” and an alert to family, never a calendar change.</li>
      <li><b>No medical advice.</b> She schedules, reminds, summarizes and asks; clinicians decide.</li>
      <li><b>Consent first.</b> Rosa chooses who Nayeli can call and who gets updates.</li>
      <li><b>Privacy roadmap.</b> HIPAA-ready infrastructure and BAAs with every vendor before pilots.</li>
    </ul>
  </div>
</section>

{/* 8 · ROADMAP */}
<section className="sec road" id="road" data-title="Roadmap">
  <div className="wrap">
    <p className="eyebrow coral">What’s next</p>
    <h2 className="h2 narrow">From a morning rescue to a care companion every day.</h2>
    <div className="rgrid reveal">
      <div className="rcard"><span className="rnow">Next</span><h3>Symptom check-in calls</h3><p>A short daily call: “¿Cómo amaneció hoy?”</p></div>
      <div className="rcard"><span className="rnow">Next</span><h3>Pill photo check</h3><p>Rosa shows the pill; Nayeli confirms it’s the right one.</p></div>
      <div className="rcard"><span>Later</span><h3>Community Resources</h3><p>Such as food and housing.</p></div>
      <div className="rcard"><span>Later</span><h3>Family Network</h3></div>
    </div>
  </div>
</section>

{/* 9 · TEAM / ASK */}
<section className="sec team" id="team" data-title="Team">
  <div className="wrap">
    <h2 className="h2">The team.</h2>
    <div className="people reveal">
      <a className="person sky" href="https://www.linkedin.com/in/mercedeslladosvila/" target="_blank" rel="noopener"><div className="pa"><Image src="/team/mercedes-llados-vila.jpg" alt="Mercedes Llados Vila" width={360} height={360} /></div><b>Mercedes Llados Vila</b><span className="li">LinkedIn ↗</span></a>
      <a className="person sage" href="https://www.linkedin.com/in/aleeguren/" target="_blank" rel="noopener"><div className="pa"><Image src="/team/ale-eguren.jpg" alt="Ale Eguren" width={360} height={360} /></div><b>Ale Eguren</b><span className="li">LinkedIn ↗</span></a>
    </div>
  </div>
</section>

{/* 10 · CLOSE */}
<section className="sec close" id="close" data-title="Gracias">
  <div className="wrap center">
    <span className="orb xl speaking" aria-hidden="true"><span className="ring"></span><span className="ring r2"></span><span className="core"></span></span>
    <h2 className="mega sm">Gracias.</h2>
    <p className="lede">Diego made his math test. Rosa made her appointment.<br />Nayeli handled the rest.</p>
    <a className="btn light" href="https://nayeli-care-buddy.base44.app" target="_blank" rel="noopener">Try Nayeli</a>
  </div>
</section>


    </>
  );
}
