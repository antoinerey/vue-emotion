<template>
  <Box>
    Empty box
  </Box>
  <Box :css="{ color: 'brown' }">
    Super simple box
  </Box>
  <Button
    color="blue"
    class="red"
    :css="{ padding: 10, ':hover': { padding: 20 } }"
  >
    Hello world
  </Button>
  <SuperButton color="blue" class="red">
    Hello world
  </SuperButton>
  <Button color="red" :class="styles.black">
    Hello world
  </Button>
  <Button color="deeppink" :class="styles.big">
    Hello world
  </Button>
  <Button color="orange">
    Hello world
  </Button>
  <Heading color="blue" @click="log" data-test="hello">
    Heading
  </Heading>
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
  big: css({
    fontSize: 20,
  }),
}
</script>

<style>
.red {
  background: red;
}
</style>
