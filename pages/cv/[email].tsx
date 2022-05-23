import type { NextPage } from "next";
import Head from "next/head";

import { Header, Footer, Message, Profile } from "components";
import { useEffect, useRef, useState } from "react";
import useMessage from "hooks/useMessage";

let dropdownDurationMS = 500;

export const getServerSideProps: (arg0: any) => any = async ({ params }) => {
  let { email } =  params;

  if (!email) {
    return {
      props: {
        profile: undefined,
      },
    };
  }

  let { profile } = await fetch(`http://127.0.0.1:5000/profile?email=${email}`).then(async response => await response.json())
  
  return {
    props: {
      profile,
    },
  };
};

const CustomCvPage: NextPage<{ profile: any }> = ({ profile }) => {
  let msgVisibilityMs = 2500;
  const { message, isMsgVisible, pushMessage } = useMessage(msgVisibilityMs);
  const lastPageItem = useRef<HTMLDivElement>(null);

  const [showingFooter, setShowingFooter] = useState(false);
  const [isScrolledMax, setIsScrolledMax] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let currentScrollY = window.innerHeight + window.scrollY;
      let minScrolledWindowPercentage = 0.95;

      setIsScrolledMax(
        currentScrollY >=
          document.body.offsetHeight * minScrolledWindowPercentage
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFooter = () => {
    setShowingFooter(!showingFooter);

    if (isScrolledMax) {
      setTimeout(() => {
        !showingFooter &&
          lastPageItem?.current?.scrollIntoView({ behavior: "smooth" });
      }, dropdownDurationMS*1.25);
    }
  };

  return (
    <>
      <Head>
        <title>MercadoCV | {profile.name}</title>
        <meta name="description" content={`MercadocCV de ${profile.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Profile
        profile={profile}
        toggleFooter={toggleFooter}
        pushMessage={pushMessage}
      />

      {!isMsgVisible ? null : (
        <Message message={message} durationMs={msgVisibilityMs} />
      )}

      <Footer
        profileName={profile.name}
        profileContact={profile.contact}
        showingFooter={showingFooter}
        toggleFooter={toggleFooter}
      />

      <div ref={lastPageItem}></div>
    </>
  );
};

export default CustomCvPage;
