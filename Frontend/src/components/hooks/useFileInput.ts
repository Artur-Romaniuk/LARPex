import { useEffect, useState } from "react";

interface FileInputProps {
  url?: string;
}

const useFileInput = (props: FileInputProps) => {
  const { url } = props;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (url && url !== "") {
      setPreview(url);
    }
  }, [url]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFile(null);
      setPreview(null);
      return;
    }
    const preview = URL.createObjectURL(file);
    setFile(file);
    setPreview(preview);
  };

  return {
    file,
    preview,
    handleChange,
  };
};

export default useFileInput;
