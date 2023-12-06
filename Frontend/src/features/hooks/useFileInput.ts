import { useState } from "react";

const useFileInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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
