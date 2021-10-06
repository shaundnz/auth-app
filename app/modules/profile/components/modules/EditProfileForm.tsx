import React from "react";
import FormContainer from "../../../auth/components/modules/FormContainer";
import {
  VStack,
  Heading,
  Text,
  FormControl,
  Input,
  Textarea,
  FormLabel,
  FormErrorMessage,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
  name: string;
  bio: string;
  phone: string;
  email: string;
}

const schema = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string().allow("").optional(),
  phone: Joi.string()
    .empty("")
    .length(10)
    .pattern(/^[0-9]+$/)
    .optional()
    .messages({
      "string.base":
        "Sorry! It looks like something went wrong. Please try later",
      "string.length": "Phone number must be 10 digits",
      "string.pattern.base": "Phone number must be a 10 digit number",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

interface Props {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileForm: React.FC<Props> = ({ setIsEditing }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer align="flex-start" spacing={4}>
        <VStack align="flex-start" pb="3">
          <Heading size="lg" as="h4" fontWeight="medium">
            Change Info
          </Heading>
          <Text size="xs" color="app.light">
            Update your details here
          </Text>
        </VStack>
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name..."
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.bio}>
          <FormLabel>Bio</FormLabel>
          <Textarea
            id="bio"
            type="text"
            {...register("bio")}
            placeholder="Enter your bio..."
          />
          <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.phone}>
          <FormLabel>Phone</FormLabel>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="Enter your email..."
          />
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            {...register("email")}
            placeholder="Enter your email..."
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <Flex align="center" justify="space-between" w="100%" pt="3">
          <Button
            color="app.link"
            variant="ghost"
            leftIcon={<ChevronLeftIcon />}
            _hover={{ background: "none" }}
            alignSelf="flex-start"
            onClick={() => setIsEditing(false)}
          >
            Back
          </Button>
          <Spacer />
          <Button colorScheme="blue" type="submit">
            Save
          </Button>
        </Flex>
      </FormContainer>
    </form>
  );
};

export default EditProfileForm;
