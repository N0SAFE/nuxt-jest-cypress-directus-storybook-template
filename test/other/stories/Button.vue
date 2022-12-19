<!--  create a template button -->

<template>
  <button class="button" :class="buttonClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return `button button--${this.type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &--primary {
    background-color: #3490dc;
    border-color: #3490dc;
    color: #fff;

    &:hover {
      background-color: #2779bd;
      border-color: #2779bd;
    }
  }

  &--secondary {
    background-color: #ffed4a;
    border-color: #ffed4a;
    color: #212529;

    &:hover {
      background-color: #ffe000;
      border-color: #ffe000;
    }
  }

  &--danger {
    background-color: #e3342f;
    border-color: #e3342f;
    color: #fff;

    &:hover {
      background-color: #cc1f1a;
      border-color: #cc1f1a;
    }
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
}
</style>