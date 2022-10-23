import Head from "next/head";

const Error404 = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-xl shadow-xl">
      <Head>
        <title>{`Error 404`}</title>
      </Head>
      <h1 className="text-rose-500 text-3xl font-semibold">
        404 | page not found
      </h1>
    </div>
  );
};

export default Error404;
