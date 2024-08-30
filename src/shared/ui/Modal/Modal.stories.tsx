import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "widget/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae maxime sint explicabo quo. Ut eius ex corporis. Mollitia in illo ipsa eaque laudantium ut sequi, atque officiis ab perferendis!",
};
