import Accordion from 'react-bootstrap/Accordion';
import './css/faq.css';
function AllCollapseExample() {
  return (
    <div className='t'>
      <h1 className='we' style={{ backgroundColor: '#000000' }}>Frequently Asked Questions</h1>
    <Accordion className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the Prajwalan hackathon?</Accordion.Header>
        <Accordion.Body className="white-text">
        Prajwalan Hackathon is a 24-hour long  event where participants from all over India collaborate to work on fun problem statements based on the software and electronics domains to give an obliging solution.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can participate?</Accordion.Header>
        <Accordion.Body>
          <div className='aq'>Prajwalan Hackathon is open to all undergraduate students from all colleges across India.</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
    <Accordion.Header>How much is the participation fee?</Accordion.Header>
    <Accordion.Body>
        The participation fee for the initial round, which includes the presentation submission, is a nominal amount of 150 INR per team. If your team successfully qualifies for the second round, there will be an additional participation fee of 850 INR per participant. We believe these fees contribute to the overall excitement of the event and help ensure a rewarding experience for all participants.
    </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3">
    <Accordion.Header>What is the team size to participate in the hackathon?</Accordion.Header>
    <Accordion.Body>
        Embark on this hackathon journey with a team of visionaries! Form a dynamic group of 4 to 6 members to amplify your creativity and collaborative spirit. For individual participants eager to join the excitement, worry not – we'll assist you in connecting with fellow participants to curate a team where innovative ideas flourish. The power of teamwork awaits you at the Prajwalan Hackathon!
    </Accordion.Body>
</Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Will the hackathon be in person or online this year?</Accordion.Header>
        <Accordion.Body>
        This year, the Prajwalan hackathon will be conducted in complete in-person mode.
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="5">
        <Accordion.Header>What are Important Dates?</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Last Date to Register :- 07-02-24</li>
          <li></li>
        </ul>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
    </div>
  );
}

export default AllCollapseExample;