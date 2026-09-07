"use client";

import { useEffect } from "react";
import { exposeReduce } from "./reduce";
import SmartBar from "./SmartBar";
import FullScreenMenu from "./FullScreenMenu";
import SmoothScroll from "./SmoothScroll";
import Modal from "./Modal";
import PannedSlots from "./PannedSlots";
import PlayMarks from "./PlayMarks";
import Counters from "./Counters";
import StickyStrip from "./StickyStrip";
import Reveal from "./Reveal";
import HeroSound from "./HeroSound";

export default function Behaviors() {
  useEffect(() => {
    exposeReduce();
  }, []);

  return (
    <>
      <SmartBar barId="top" />
      <SmartBar barId="mv-topbar" />
      <SmartBar barId="cd-topbar" />
      <FullScreenMenu />
      <SmoothScroll />
      <Modal />
      <PannedSlots />
      <PlayMarks />
      <Counters />
      <HeroSound />
      <StickyStrip stripSel=".ca-sticky" startSel="#top" endSel=".ca-endcta" onClass="ca-on" />
      <StickyStrip stripSel=".sp-sticky" startSel="#top" endSel=".sp-endcta" onClass="sp-on" />
      <StickyStrip stripSel=".bp-sticky" startSel="#top" endSel=".bp-endcta" onClass="bp-on" />
      <StickyStrip stripSel=".hb-sticky" startSel="#hb-top" endSel="#apply" onClass="hb-on" />
      <Reveal sel=".pl-reveal" inClass="pl-in" rootMargin="0px 0px -12% 0px" threshold={0.08} />
      <Reveal sel=".hb-reveal" inClass="hb-in" rootMargin="0px 0px -8% 0px" threshold={0.05} />
    </>
  );
}
