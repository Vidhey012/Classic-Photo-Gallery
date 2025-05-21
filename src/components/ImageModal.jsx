import { useImageStore } from '../store/useImageStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


export default function ImageModal() {
  const modalImage = useImageStore((state) => state.modalImage);
  const setModalImage = useImageStore((state) => state.setModalImage);

  if (!modalImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-2xl relative">
        <button
          onClick={() => setModalImage(null)}
          className="absolute top-2 right-2 text-black text-xl"
        >
          &times;
        </button>
        <img
          src={modalImage.urls.regular}
          alt={modalImage.alt_description}
          className="w-full rounded"
        />
        <p className="mt-2 text-sm text-gray-600">{modalImage.alt_description}</p>
      </div>
    </div>
  );
}
