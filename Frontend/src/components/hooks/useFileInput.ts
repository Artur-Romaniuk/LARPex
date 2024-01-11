import { useEffect, useState } from "react";
import { IMAGE_HOST } from "../../config/config.ts";

interface FileInputProps {
  url?: string;
}

const useFileInput = (props: FileInputProps) => {
  const { url } = props;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (url && url !== "") {
      fetch(IMAGE_HOST + url)
        .then((res) => {
          console.log(res);
          return res.blob();
        })
        .then((json) => {
          const blob = new Blob([json], { type: "image/png" });
          const file = new File([blob], "image.png", { type: "image/png" });
          setFile(file);
          setPreview(URL.createObjectURL(file));
        });
    }
  }, [url]);

  const clearInput = () => {
    setFile(null);
    setPreview(null);
  };

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
    clearInput,
  };
};

export default useFileInput;
