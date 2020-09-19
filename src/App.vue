<template>
  <!-- Transparent wrapper -->
  <Box>
    Empty box
  </Box>

  <!-- Transparent wrapper using `css` prop -->
  <Box :css="{ color: 'brown' }">
    Super simple box
  </Box>

  <!-- Styled component -->
  <Button color="blue">
    Hello world
  </Button>

  <!-- Extended styled component -->
  <SuperButton color="blue" class="red">
    Hello world
  </SuperButton>

  <!-- Styled component, with static CSS class -->
  <Button color="deeppink" class="red">
    Hello world
  </Button>

  <!-- Styled component, merging custom emotion CSS class -->
  <Button color="red" :class="styles.black">
    Hello world
  </Button>

  <!-- Styled component created through the `as` method (native element) -->
  <!-- Event listeners and attributes are correctly bound -->
  <Heading color="blue" @click="log" data-test="hello">
    Heading
  </Heading>

  <!-- Styled component created through the `as` method (custom component) -->
  <Text>
    Still rendering an H1
  </Text>
</template>

<script setup>
import { Box, Button, Heading, Text, SuperButton } from './components'
import { css } from 'emotion'

export default {
  components: {
    Box,
    Button,
    Heading,
    Text,
    SuperButton,
  },
}

export const log = console.log.bind(console)

export const styles = {
  black: css({
    background: 'black',
  }),
}
</script>

<style>
.red {
  background: red;
}
</style>
