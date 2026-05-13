export function Card({ title, description, icon }) {

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    );
  }