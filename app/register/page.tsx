"use client";

import LoginForm from "@/ui/account/login-form";
import Breadcrumbs from "@/ui/helpers/breadcrums";
import Image from "next/image";

const Register = () => {
  return (
    <>
      <Breadcrumbs className="mb-0" />
      <section className="login-section">
        <Image fill src={"/img/login-bg.jpg"} alt="" className="mb-0" />
        <LoginForm />
      </section>
    </>
  );
};

export default Register;
