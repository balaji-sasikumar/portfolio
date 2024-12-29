import { Card, CardContent, Typography, CardHeader, Box } from "@mui/material";

interface CertificationProps {
  title: string;
  description: string;
}

const Certification = ({ title, description }: CertificationProps) => (
  <Card elevation={2} sx={{ marginBottom: "1rem", backgroundColor: "#fff" }}>
    <CardHeader title={title} />
    <CardContent>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const Certifications = () => (
  <section
    id="certifications"
    style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}
  >
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "1rem" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "2rem", color: "#3f51b5" }}
      >
        Certifications
      </Typography>
      <Certification
        title="Front-End Web UI frameworks and tools-Bootstrap"
        description="Successfully completed the Front-End Web UI frameworks and tools - Bootstrap course on Coursera, acquiring skills in utilizing Bootstrap for developing responsive and visually appealing web interfaces."
      />
      <Certification
        title="Front-End Web Development with React"
        description="Successfully completed the Front-End Web Development with React course on Coursera, gaining expertise in building user interfaces using React."
      />
      <Certification
        title="Microsoft Certified: Azure Developer Associate (AZ-204)"
        description="Proficient in building end-to-end solutions in Microsoft Azure, including creating Azure Functions, implementing and managing web apps, and developing solutions utilizing Azure storage."
      />
      <Certification
        title="Microsoft Certified: Azure Data Scientist Associate (DP-100)"
        description="Skilled in managing data ingestion and preparation, model training and deployment, and machine learning solution monitoring using Python, Azure Machine Learning, and MLflow."
      />
    </Box>
  </section>
);

export default Certifications;
