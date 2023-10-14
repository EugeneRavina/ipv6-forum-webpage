import Header from '../shared/components/header';

function Milestones() {
  return (
    <div className="container mx-auto m-4 p-5 shadow-md max-w-4xl">
      <div className="flex justify-center">
        <div className="flex flex-col ">
          <Header title="Milestones" />
          <ul>
            <li>Established an open, international FORUM of IPv6 expertise;</li>
            <li>
              Shared IPv6 technical knowledge and experience among members; And
              to various local academe’s;
            </li>
            <li>
              Published / adopted new Proof of Concept Frameworks in
              collaborations with different ETSI ISG IPE Members for global
              solutions and Promoted interoperable implementations of IPv6
              Standards;
            </li>
            <li>
              Co-authored Implementing Rules & Regulations (IRR) for the
              Philippine Government to achieve a smooth transition to IPv6
              Technology (cJune’2010);
            </li>
            <li>Resolved issues that create barriers to IPv6 deployment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
