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
      <div className="flex flex-row space-x-4 justify-center items-center w-fit">
        <div className="justify-center items-center flex flex-row relative">
          <div className="flex flex-row items-center space-x-2">
            <div className="border-4 border-gray-300 border-radius rounded-full p-4 bg-green-600"></div>
            <svg
              width="163pt"
              height="170pt"
              viewBox="0 0 163 170"
              version="1.1"
            >
              <path
                fill="#e5e7eb"
                opacity="1.00"
                d=" M 22.00 20.00 C 27.00 20.00 32.00 20.00 37.00 20.00 C 37.01 30.33 36.98 40.66 37.01 50.99 C 37.18 67.01 42.68 82.91 52.45 95.59 C 65.49 112.84 86.35 123.84 107.95 124.89 C 119.29 125.15 130.65 124.93 142.00 125.00 C 142.00 130.00 142.00 135.00 142.00 140.00 C 124.08 139.45 105.73 141.81 88.24 136.81 C 65.20 130.61 44.98 114.77 33.43 93.89 C 25.96 80.57 21.99 65.32 22.00 50.04 C 22.00 40.03 22.00 30.01 22.00 20.00 Z"
              />
            </svg>
          </div>
          <div className="absolute left-0 top-10 h-full flex flex-col align-items-end w-8">
            <div className="w-4 h-2 border-l-4 w-full"></div>
            <div className="border-solid border-4 border-gray-200 h-8 top-1 border-t-transparent w-full border-r-transparent rounded-bl-3xl"></div>
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
