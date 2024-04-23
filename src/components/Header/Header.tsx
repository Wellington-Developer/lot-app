"use client";

import "./styles.css";
import SocialMediaHeader from "./SocialMediaHeader";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export function Header() {
  const [active, activeMenu] = useState(false);

  return (
    <div>
      <SocialMediaHeader />
      <div className="container-header">
        <div className="content-header container">
          <div className="logo-header"></div>

          <div>
            <div className="controller-menu">
              {!active && <IoMenu onClick={() => activeMenu(!active)} />}
              {active && <IoIosClose onClick={() => activeMenu(!active)} />}
            </div>

            <div className={`menu-header ${active ? "active" : ""}`}>
              <ul>
                <li>
                  <Link href="/sobre-nos">Sobre nós</Link>
                </li>
                <li>
                  <Link href="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link href="/documentacao">Documentação</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
