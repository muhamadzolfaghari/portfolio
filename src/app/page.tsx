import Experience from "./Experience";

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
      role: "Fronten Developer",
      startDate: "2020-01-01",
      endDate: "2022-12-31",
      city: "London",
      contractType: "part-time",
      country: "UK",
    },
  ];

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
      {experiences.map((experience) => (
        <Experience {...experience} key={experience.companyTitle} />
      ))}
      {/* <div>NAK Telecom</div> */}
      {/* <div>Senior   Frontend Engineer</div> */}
    </main>
  );
}
// https://dribbble.com/shots/23179554-Clean-and-Minimal-Resume-Design-Peerlist-Profile
