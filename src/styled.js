import { h } from 'vue'
import { css, cx } from 'emotion'

const styled = (tag, styles, propsWhitelist) => {
  const component = (props, context) => {
    // Accept both styles object, and styles functions.
    // Basically allows to update styles based on props.
    const stylesObject = typeof styles === 'function' ? styles(props) : styles

    const attrs = {
      ...context.attrs,
      // Also applies CSS classes set on the component itself.
      // Emotion-generated CSS classes will be merged together to avoid specificity.
      class: cx(css(stylesObject), context.attrs.class),
    }

    return h(tag, attrs, context.slots)
  }

  component.as = (newTag) => {
    return styled(newTag, styles, propsWhitelist)
  }

  // Make sure only relevant CSS classes are applied.
  component.inheritAttrs = false

  // Filters props out, so they're not inserted into the DOM.
  component.props = propsWhitelist

  return component
}

export default styled
