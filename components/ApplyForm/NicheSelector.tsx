type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function NicheSelector({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">
        Creator Niche *
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-[#16161d] border border-white/10 p-4 outline-none focus:border-purple-500"
        required
      >
        <option value="">Select Creator Niche</option>

        <option value="Gaming">🎮 Gaming</option>
        <option value="Lifestyle">🏡 Lifestyle</option>
        <option value="Tech">💻 Tech</option>
        <option value="Finance">💰 Finance</option>
        <option value="Entertainment">🎬 Entertainment</option>
        <option value="Education">📚 Education</option>
        <option value="Business">💼 Business</option>
        <option value="Food">🍔 Food</option>
        <option value="Travel">✈️ Travel</option>
        <option value="Fashion">👗 Fashion</option>
        <option value="Beauty">💄 Beauty</option>
        <option value="Fitness">💪 Fitness</option>
        <option value="Automobile">🚗 Automobile</option>
        <option value="AI">🤖 AI</option>
        <option value="Other">📦 Other</option>
      </select>
    </div>
  );
}