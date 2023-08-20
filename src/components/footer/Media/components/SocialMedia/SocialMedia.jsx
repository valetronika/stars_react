import s from "./SocialMedia.module.css";
import React from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import {
    BiLogoFacebook,
    BiLogoPinterest,
    BiLogoReddit,
    BiLogoSteam,
} from "react-icons/bi";
export default function SocialMedia() {
    return (
        <div className={s.media}>
            <SiInstagram />
            <SiLinkedin />
            <BiLogoFacebook />
            <BiLogoPinterest />
            <BiLogoReddit />
            <BiLogoSteam />
        </div>
    );
}
