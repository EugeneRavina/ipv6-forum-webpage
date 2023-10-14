import Header from '../shared/components/header';

function Charter() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="Our Mission" />
          <p>
            The Philippine IPv6 Forum Inc., (Philv6Forum) is a chapter backed by
            Global IPv6 Forum with a clear mission to advocate IPv6 for its
            advancement and propagation in the Philippines. Likewise, to provide
            technical leadership and innovative thought for the successful
            integration of IPv6 into all facets of networking and
            telecommunications infrastructures; Towards the effective
            development of a sound and secured information & communication
            technology and for the delivery of efficient public services.
            Through its continuous building awareness and promotions care of
            IPv6-centric conferences, summit, workshops, and education programs
            in collaborations with various IPv6 Councils from around the world.
            Philv6Forum will strive to be the guiding force in the readiness and
            adoption of IPv6 in the Philippines. A thriving knowledge economy
            through public-private partnership to bridge the way for strategic
            IPv6 readiness and adoption in the Philippines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charter;
