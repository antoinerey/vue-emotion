import styled from './styled'

export const Box = styled('div')

export const Button = styled(
  // Set the native HTML tag we want to use.
  'button',
  // Styles may either be defined as an object or a function.
  // The API is quite similar to react emotion.
  (props) => ({
    fontStyle: 'italic',
    color: props.color,
  }),
  // Props are defined that way.
  // Make sure not to treat those properties as attributes.
  // And thus, do not render them in the DOM.
  ['color'],
)

// It's possible to simply extend a previous styled component.
export const SuperButton = styled(Button, {
  fontSize: 24,
})

// It's also possible to set another native HTML
export const Heading = Button.as('h1')

// Or any other component.
export const Text = Button.as(Heading)
