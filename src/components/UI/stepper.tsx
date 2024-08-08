import { FC } from "react";
import {
  Box,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  Stepper as ChakraStepper,
} from "@chakra-ui/react";
import { steps } from "@/helpers/constant";

const Stepper: FC = (): JSX.Element => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <ChakraStepper index={activeStep} colorScheme="green">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              active={<StepNumber />}
              incomplete={<StepNumber />}
              complete={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink={0}>
            <StepTitle>{step.title}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
};

export { Stepper };
