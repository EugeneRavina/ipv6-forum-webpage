import Header from '../shared/components/header';

function Affiliates() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="The Global IPv6 Forum Affiliate / Associate" />
          <p>
            The IPv6 Forum is a world-wide consortium of international Internet
            service providers (ISPs) and National Research & Education Networks
            (NRENs), with a mission to promote IPv6 by improving market and user
            awareness, creating a quality and secure New Generation Internet and
            allowing world-wide equitable access to knowledge and technology.
            The key focus of the IPv6 Forum today is to provide technical
            guidance for the deployment of IPv6. IPv6 Summits are organized by
            the IPv6 Forum and staged in various locations around the world to
            provide industry and market with the best available information on
            this rapidly advancing technology. For further details, please visit
            <a
              href="http://www.ipv6forum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 ml-1"
            >
              IPv6Forum Website
            </a>
          </p>
          {/* create a link to the ipv6forum.com that open in a new tag */}
        </div>
      </div>
    </div>
  );
}
export default Affiliates;
