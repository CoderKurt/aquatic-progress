const SummaryStep = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <h1>Summary</h1>
      {skills.map((skill) => (
        <div key={skill}>{skill}</div>
      ))}
    </div>
  );
};

export default SummaryStep;
