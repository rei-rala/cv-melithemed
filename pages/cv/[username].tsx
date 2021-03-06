import type { NextPage } from "next";
import Head from "next/head";

import { Header, Footer, Message, Profile } from "components";
import { useEffect, useRef, useState } from "react";
import useMessage from "hooks/useMessage";
import Link from "next/link";


export const getServerSideProps: (arg0: any) => any = async (context) => {

  let { username } = context.params;

  if (!username) {
    return {
      props: {
        profile: null,
      },
    };
  }

  let { profile, error } = await fetch(`http://${context.req.headers.host}/api/profile?username=${username}`).then(res => res.json());
  return {
    props: {
      profile,
      error
    },
  };
};

const CustomCvPage: NextPage<{ profile: any, error: any }> = ({ profile, error }) => {
  let dropdownDurationMS = 500;
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
    let timeoutMultiplier = 1.3
    let scrollTimeout = dropdownDurationMS * timeoutMultiplier
    setShowingFooter(!showingFooter);

    if (isScrolledMax) {
      setTimeout(() => {
        !showingFooter &&
          lastPageItem?.current?.scrollIntoView({ behavior: "smooth" });
      }, scrollTimeout);
    }
  };

  return (
    error
      ? <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p><b>Error {error.code}</b>: {error.message}</p>
        <Link href="/">Volver a root </Link>
      </div >
      : !profile
        ? <span style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '100vh' }}><b>ERROR DESCONOCIDO</b></span>
        : (<>
          <Head>
            <title> Curriculum | {profile.name} </title>
            <meta name="description" content={`Curriculum ${profile.name} con estilo MeLi`} />
            <link rel="icon" href="/favicon.ico" />
          </Head >

          <Header />
          <Profile profile={profile} showingFooter={showingFooter} toggleFooter={toggleFooter} pushMessage={pushMessage} />

          {
            !isMsgVisible ? null : (
              <Message message={message} durationMs={msgVisibilityMs} />
            )
          }

          <Footer
            profileName={profile.name}
            profileContact={profile.contact}
            showingFooter={showingFooter}
            toggleFooter={toggleFooter}
          />

          <div ref={lastPageItem}></div>
        </>
        )
  );
};

export default CustomCvPage;
