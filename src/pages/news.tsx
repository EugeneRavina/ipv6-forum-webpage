import Header from '../shared/components/header';

function News() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="News" />
          <p>
            The Advanced Incident Response System (AIRS) is an IPv6-enabled
            solution that would allow incident response personnel from various
            local, municipal, and government agencies to communicate seamlessly
            during an event while minimizing dependencies on the fixed
            infrastructure of the disaster site. Leveraging next generation
            technologies like IPv6, network mobility, mobile ad hoc networking,
            and advanced sensor systems, the AIRS solution would enable
            responders to communicate securely with each other and with their
            commanders in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default News;
