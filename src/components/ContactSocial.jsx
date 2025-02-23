import React from 'react';
import SingleContactSocial from './contactMeSection/SingleContactSocial';
import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin } from "react-icons/ai";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link="https://github.com/surya-prakash08?tab=repositories" Icon={LuGithub} />
      <SingleContactSocial link="https://www.linkedin.com/in/ersuryait/" Icon={AiFillLinkedin} />
    </div>
  );
}

export default ContactSocial;
