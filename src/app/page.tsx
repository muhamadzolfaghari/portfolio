import Experience from "./Experience";
import pic from "../images/pic.png";
import Image from "next/image";

export default function Home() {
  const experiences: Experience[] = [
    {
      companyTitle: "Company A",
      role: "Senior Frontend Developer",
      startDate: "2015-01-01",
      endDate: "Present",
      city: "New York",
      contractType: "full-time",
      country: "USA",
    },
    {
      companyTitle: "Company B",
      role: "Frontend Developer",
      startDate: "2020-01-01",
      endDate: "2022-12-31",
      city: "London",
      contractType: "part-time",
      country: "UK",
    },
  ];

  return (
    <>
      <div className="z-index-1 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_24px]"></div>
      <main className="relative flex min-h-screen flex-col items-center justify-between p-4 font-sans max-w-screen-xl m-auto">
        <nav className="w-full bg-opacity-35 bg-gray-700 rounded-full p-2 border-1 border-white">
          <div className="flex justify-between">
            <button className="bg-green-600 px-5 py-3 rounded-full">
              Home
            </button>
            <div className="hidden md:flex">
              <button className="bg-green-600 px-5 py-3 rounded-full">
                Experience
              </button>
              <button className="bg-green-600 px-5 py-3 rounded-full">
                Contact
              </button>
            </div>
            <div className="flex justify-center">
              {/* <img
      src="/your_logo_path_here.png"
      alt="Your Logo"
      width={80}
      height={80}
      className="max-w-20 md:hidden"
    /> */}
            </div>
            <div className="hidden md:flex">
              <button className="bg-green-600 px-5 py-3 rounded-full">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        <div className="flex flex-row pt-4 items-center space-x-4 w-full justify-center">
          <div>
            <h1 className="text-4xl font-bold">Hi, I'm Mohammad</h1>
            <div className="font-light">
              <span>
                Passionate and results-driven, I am a Senior Front-End Developer
                with over 7 years of experience in crafting cutting-edge B2B
                solutions using the React ecosystem and a variety of programming
                languages. My expertise extends to leading teams with strong
                leadership abilities, mentoring effectively, and enhancing
                performance through rigorous testing and efficient
                troubleshooting.
              </span>
              <span>
                As a proactive problem solver, I am dedicated to constructing
                secure and high-performing web applications. I thrive on
                continuous improvement, committed to ongoing research for
                valuable insights that inform our development processes. With a
                track record of delivering impactful solutions, I am poised to
                contribute positively to dynamic teams and projects.
              </span>
            </div>
          </div>
          <Image
            src={pic}
            alt={"My pictuere"}
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>

        {experiences.map((experience) => (
          <Experience {...experience} key={experience.companyTitle} />
        ))}
        {/* <div>NAK Telecom</div> */}
        {/* <div>Senior   Frontend Engineer</div> */}
      </main>
    </>
  );
}
// https://dribbble.com/shots/23179554-Clean-and-Minimal-Resume-Design-Peerlist-Profile
