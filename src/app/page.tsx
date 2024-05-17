import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <h1 className="text-4xl font-bold">Mohammad Zolfaghari</h1>
      <div className="font-sans text-xl text-gray-700">
        <p>
          Passionate and results-driven, I am a Senior Front-End Developer with
          over 7 years of experience in crafting cutting-edge B2B solutions
          using the React ecosystem and a variety of programming languages. My
          expertise extends to leading teams with strong leadership abilities,
          mentoring effectively, and enhancing performance through rigorous
          testing and efficient troubleshooting.
        </p>
        <p>
          As a proactive problem solver, I am dedicated to constructing secure
          and high-performing web applications. I thrive on continuous
          improvement, committed to ongoing research for valuable insights that
          inform our development processes. With a track record of delivering
          impactful solutions, I am poised to contribute positively to dynamic
          teams and projects.
        </p>
      </div>
      <div className="flx flex-col space-y-4"></div>
      <div className="flex flex-row space-x-4 justify-center items-center relative w-fit">
        <div className="justify-center items-center ">
          <div className="flex flex-row items-center space-x-2">
            <div className="border-4 border-gray-300 border-radius rounded-full p-4 bg-green-600"></div>
          </div>
          <div className="absolute left-0 top-10 h-full flex flex-row space-x-2 align-items-end">
            <div className="w-4 h-2 border-l-4"></div>
            <div className="border-solid border-4 border-gray-200 h-8 absolute w-8 top-1 border-t-transparent border-r-transparent rounded-bl-3xl"></div>
          </div>
        </div>
        <div>
          <div>NAK Telecom</div>
          <div className="text-nowrap	font-bold h-fit mt-6 pl-2x">
            Senior Frontend Engineer
          </div>
        </div>
      </div>
      {/* <div>NAK Telecom</div> */}
      {/* <div>Senior   Frontend Engineer</div> */}
    </main>
  );
}
// https://dribbble.com/shots/23179554-Clean-and-Minimal-Resume-Design-Peerlist-Profile