

export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <footer className=" bg-white shadow pt-16">
      <div className="text-center py-2 px-4 fixed bottom-0 w-full bg-white border">
        <p>
          © All Rights Reserved <strong>{year} || bdedujob.info</strong>
        </p>
      </div>
    </footer>
  );
};