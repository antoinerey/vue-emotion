import { h } from 'vue'
import { css, cx } from 'emotion'

const styled = (tag, styles = {}, propsWhitelist = []) => {
  const component = (props, context) => {
    // Accept both styles object, and styles functions.
    // Basically allows to update styles based on props.
    const stylesObject = typeof styles === 'function' ? styles(props) : styles

    // Support for the `css` prop.
    // The values take precedence over the default styles.
    const finalStylesObject = { ...stylesObject, ...props.css }

    // Make sure not to insert any CSS classes if there are not styles.
    if (Object.keys(finalStylesObject).length === 0) {
      return h(tag, context.attrs, context.slots)
    }

    const attrs = {
      ...context.attrs,
      // Also applies CSS classes set on the component itself.
      // Emotion-generated CSS classes will be merged together to avoid specificity.
      class: cx(css(finalStylesObject), context.attrs.class),
    }

    return h(tag, attrs, context.slots)
  }

  component.as = (newTag) => {
    return styled(newTag, styles, propsWhitelist)
  }

  // Make sure only relevant CSS classes are applied.
  component.inheritAttrs = false

  // Filters props out, so they're not inserted into the DOM.
  // Support both array & object definitions.
  // Also, register the `css` prop.
  if (Array.isArray(propsWhitelist)) {
    component.props = [...propsWhitelist, 'css']
  } else {
    component.props = { ...propsWhitelist, css: Object }
  }

  return component
}

export default styled
