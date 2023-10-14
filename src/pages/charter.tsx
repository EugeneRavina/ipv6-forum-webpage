import Header from '../shared/components/header';

function Charter() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="The Charter" />
          <p>
            The Philippine IPv6 Forum, Inc (Philv6Forum) is a non-profit
            organization founded in '2005 and was registered in the Philippine
            Securities Commission (PSEC) since May '2019. The Philippine IPv6
            Forum is an organization managed by a community of volunteers,
            representatives of various stakeholder groups and disciplines,
            including professionals, academe/students, research and development
            institutes, commercial entities, and the public sector. Thus,
            creating a program, driving awareness, and promotions about IPv6
            technology deployment. Backed up by Global IPv6 Forum based in
            Luxembourg.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charter;
