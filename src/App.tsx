import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import FeedbackList from "./components/feedback-list"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            Hello World!
          </Text>
          <FeedbackList title="My Feedback Items" showTitle={true} />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
