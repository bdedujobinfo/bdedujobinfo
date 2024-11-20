import { SocialMedia } from "../navbar/SocialMedia";


export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <footer className=" bg-white shadow text-center py-2 px-4 mt-4 border">
      <div>
        <SocialMedia />
      </div>
      <div >
        <p>
          © All Rights Reserved <strong>{year} || bdedujob.info</strong>
        </p>
      </div>
    </footer>
  );
};