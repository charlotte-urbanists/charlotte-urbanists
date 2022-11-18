import * as React from 'react';

export default function PageHead({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} data-rh="true" />
      <meta name="description" property="og:description" content={description} data-rh="true" />
    </>
  );
}
