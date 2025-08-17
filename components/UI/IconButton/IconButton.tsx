import { IconButton, IconButtonProps } from "@chakra-ui/react";

interface IconButtonUIProps extends IconButtonProps {
  component: React.ReactNode;
}

const IconButtonUI: React.FC<IconButtonUIProps> = ({ component, ...rest }) => {
  return (
    <IconButton 
     bg="transparent"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
    {...rest}>
      {component}
    </IconButton>
  );
};

export default IconButtonUI;
