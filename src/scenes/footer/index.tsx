import Logo from "@/assets/Logo.png";

const Footer = () => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0"
      >
        <img alt="logo" src={Logo} />
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae magnam consectetur qui quia fugiat sed, totam officia soluta excepturi.
        </p>
        <p>&copy; All Rights Reserved</p>
      </div>
      <div className="mt_16 bases-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Train with us</p>
        <p className="my-5">Best Coaches</p>
        <p>For new customers</p>
      </div>
      <div className="mt-16 bases-1/4 md:mt-0">
        <h4 className="font-bold">Contact US</h4>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-5">Adipisicing elit. Sint, beatae</p>
        <p>(+359) 444-5555-564 </p>
      </div>
    </div>

  </footer>
}

export default Footer;
