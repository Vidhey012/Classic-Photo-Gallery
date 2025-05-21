import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ImageItem({ image }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        className="card-img-top"
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body p-2 bg-light">
        <p className="card-text text-truncate mb-0 text-dark fw-semibold">
          {image.description || image.alt_description || 'Untitled'}
        </p>
      </div>
    </div>
  );
}
