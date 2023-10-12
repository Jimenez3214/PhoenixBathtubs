import React from "react";
import { Container, Typography, List, ListItem, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  faqContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  question: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  answer: {
    marginBottom: theme.spacing(2),
  },
}));

const faqs = [
  {
    question: "What is refinishing?",
    answer: "Refinishing is a process whereby a high gloss, durable coating is spray-applied to your existing bathtub, restoring it to a like-new condition.",
  },
  {
    question: "Is this just paint?",
    answer: "No, the coating used in refinishing is specifically designed for this application. It can withstand immersion, temperature fluctuations, expansion and contraction, and is resistant to soaps, dyes, and other chemicals typically associated with bathtub use.",
  },
  {
    question: "What colors are available?",
    answer: "We can match the color of any plumbing fixture ever manufactured.",
  },
  {
    question: "Will my bathtub be easy to clean?",
    answer: "Yes. Our coating is non-porous, which means soap and other stains merely lie on the surface, not underneath. Your refinished bathtub will simply wipe clean, no scrubbing will be necessary.",
  },
  {
    question: "Why shouldn't I just replace my bathtub?",
    answer: "Typically, refinishing will save you 85% or more over replacement costs. On top of this, there is none of the construction debris associated with replacement.",
  },
  {
    question: "Do I need to bring my bathtub in to you?",
    answer: "No. All work is done in your home.",
  },
  {
    question: "How long does it take to refinish a bathtub?",
    answer: "In most cases, we will refinish your bathtub within 4 hours.",
  },
  {
    question: "How soon can I use my tub?",
    answer: "Your refinished bathtub requires a 48-hour curing period. The bathtub must not get wet during this time.",
  },
  {
    question: "What do I need to do before you come over to refinish my tub?",
    answer: "Please put away any items that may be sitting out on the bathtub or vanity. Also, remove your shower curtain and any towels that may be hanging in the bathroom.",
  },
  {
    question: "I don't have a shower curtain. I have shower doors. How do you refinish around those?",
    answer: "If you want to keep your shower doors, we will remove the doors only, and mask around the track.",
  },
  {
    question: "I'm planning on doing other work in the bathroom. When should I schedule bathtub refinishing?",
    answer: "In almost all cases, bathtub refinishing should be scheduled last. It is important that we have as little dust and debris as possible in the bathroom when we are working.",
  },
  {
    question: "My vanity is right next to the bathtub. Do I need to remove it before you arrive?",
    answer: "In most cases, this will not be necessary. Refinishing is spray applied, and we can reach enough of the area behind the vanity, so the bathtub will appear to be completely refinished. However, if the vanity is replaced at a later date, it is advisable to replace it with a similar size vanity. If you replaced the vanity with a pedestal sink for instance, you would notice a bare spot on the skirt of your bathtub. In this case, we would have to come out and respray the bathtub.",
  },
  {
    question: "My bathtub was refinished once before. Can it be refinished again?",
    answer: "Yes.",
  },
  {
    question: "My faucet is dripping. Will this be a problem?",
    answer: "Yes. The faucet should be fixed before we arrive. The bathtub must be completely dry from the time we begin spraying, through the 48-hour curing period.",
  },
  {
    question: "Is there anything I need to do after you are finished with your work?",
    answer: "There are a couple of things. First, you will need to allow your bathtub to cure for the full 48 hours. Second, you will need to remove masking paper and tape, and re-caulk your bathtub. We will provide you with instructions and everything you need in order to do this, including a tube of caulking.",
  },
  {
    question: "How do I take care of my new bathtub?",
    answer: "You will be provided with care and maintenance instructions for your refinished bathtub. Basically, you will need to clean your tub with non-abrasive cleaners, make sure your faucet doesn't drip, and store your soap and shampoo in a shower caddy.",
  },
  {
    question: "How long will the refinishing last?",
    answer: "Provided you follow our simple care instructions, your refinished bathtub will give you years of enjoyment.",
  },
];

const Faqs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.faqContainer}>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <List>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <Typography variant="h6" className={classes.question}>
                {faq.question}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.answer}>{faq.answer}</Typography>
            </ListItem>
            {index < faqs.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Faqs;