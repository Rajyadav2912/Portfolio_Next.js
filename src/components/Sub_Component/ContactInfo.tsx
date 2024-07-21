interface ContactProps {
  icon: any;
  text: string;
}

const ContactInfo: React.FC<ContactProps> = (props) => {
  const { icon, text } = props;
  return (
    <p className="flex items-center font-bold sm:text-[16px] text-[14px] gap-4">
      {icon} {text}
    </p>
  );
};
export default ContactInfo;