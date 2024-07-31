import Head from "next/head";
import React, { FC, Fragment } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Title;
