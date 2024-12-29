import { Card, CardContent, Typography, CardHeader, Box } from "@mui/material";

interface AwardProps {
  title: string;
  description: string;
}

const Award = ({ title, description }: AwardProps) => (
  <Card elevation={2} sx={{ marginBottom: "1rem", backgroundColor: "#fff" }}>
    <CardHeader title={title} />
    <CardContent>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

const Awards = () => (
  <section
    id="awards"
    style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}
  >
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "1rem" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "2rem", color: "#3f51b5" }}
      >
        Honors and Awards
      </Typography>
      <Award
        title="3rd Place in AZConf Hackathon"
        description="Achieved 3rd place in the AZConf hackathon by leveraging AKS (Azure Kubernetes Service) to deploy a Covid Dashboard project."
      />
      <Award
        title="Deming Award"
        description="Received the prestigious Deming Award twice from Peninsular Research Operation Company for delivering high-quality features with minimal bugs."
      />
      <Award
        title="Recognition Award"
        description="Earned a recognition award four times from Peninsular Research Operation Company for refactoring code, significantly enhancing performance by optimizing and streamlining the codebase."
      />
    </Box>
  </section>
);

export default Awards;
