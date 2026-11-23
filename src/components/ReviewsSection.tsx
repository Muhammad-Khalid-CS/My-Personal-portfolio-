import { useState, useEffect } from 'react';
import { REVIEWS, ReviewItem } from '../data/portfolioData';
import { Star, PlusCircle, X, Check } from 'lucide-react';

export function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mk_custom_reviews');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return [...REVIEWS, ...parsed];
        } catch {
          return REVIEWS;
        }
      }
    }
    return REVIEWS;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [quote, setQuote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Escape key listener for review modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const newReview: ReviewItem = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Client',
      rating,
      avatar: '', // Initial fallback
      quote: quote.trim()
    };

    const updated = [newReview, ...reviewsList];
    setReviewsList(updated);

    // Save only custom ones to localStorage
    const customOnes = updated.filter(r => r.id.startsWith('custom-'));
    localStorage.setItem('mk_custom_reviews', JSON.stringify(customOnes));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setName('');
      setRole('');
      setRating(5);
      setQuote('');
    }, 1200);
  };

  return (
    <section id="reviews" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#131313]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-white mb-6 tracking-tight">
          Reviews
        </h2>

        {/* Action Button: Give a Review */}
        <div className="text-center mb-16">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-usman inline-flex items-center gap-2 cursor-pointer"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Give a Review</span>
          </button>
        </div>

        {/* Reviews Grid matching Usman's .wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-8 sm:p-10 rounded-2xl bg-black/70 border-3 border-white/20 hover:border-[var(--main-color)] hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[0_0_50px_var(--main-color)] transition-all duration-400 cursor-pointer flex flex-col items-center justify-center text-center gap-4 min-h-[420px]"
            >
              {/* Reviewer Circular Avatar with Glowing Border */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-[var(--main-color)] shadow-[0_0_25px_var(--main-color)] bg-[#080808] shrink-0 flex items-center justify-center">
                {rev.avatar ? (
                  <img
                    src={rev.avatar}
                    alt={`Profile picture of reviewer ${rev.name}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div
                  className={`${rev.avatar ? 'hidden' : 'flex'} w-full h-full bg-[#080808] items-center justify-center font-bold text-3xl text-[var(--main-color)]`}
                >
                  {rev.name.charAt(0).toUpperCase()}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {rev.name}
              </h2>

              <div className="text-xs font-semibold text-[var(--main-color)] -mt-2">
                {rev.role}
              </div>

              {/* 5 Gold Stars */}
              <div className="flex items-center justify-center gap-1.5 my-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                "{rev.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Give a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-[#080808] rounded-3xl border-3 border-[var(--main-color)] p-6 sm:p-8 shadow-[0_0_50px_var(--main-color)] z-10 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h3 className="text-2xl font-extrabold text-white">
                Give a <span className="glow-span">Review</span>
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close review modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[var(--main-color)] text-black flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Review Added!</h4>
                <p className="text-sm text-white/70">
                  Thank you for your valuable feedback.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full px-4 py-3 rounded-xl bg-[#131313] border-2 border-[var(--main-color)] text-white text-sm placeholder:text-white/40 focus:outline-hidden focus:shadow-[0_0_15px_var(--main-color)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Role / Relationship
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Client, Colleague, Project Partner"
                    className="w-full px-4 py-3 rounded-xl bg-[#131313] border-2 border-[var(--main-color)] text-white text-sm placeholder:text-white/40 focus:outline-hidden focus:shadow-[0_0_15px_var(--main-color)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Rating (Stars)
                  </label>
                  <div className="flex items-center gap-2 py-1">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isFilled = (hoverRating || rating) >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(starVal)}
                          className="cursor-pointer p-1 transition-transform hover:scale-125 focus:outline-hidden"
                          aria-label={`${starVal} star rating`}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              isFilled
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-white/30'
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="text-sm font-bold text-amber-400 ml-2 font-mono">
                      {rating} / 5
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Share your experience working with Muhammad Khalid..."
                    className="w-full px-4 py-3 rounded-xl bg-[#131313] border-2 border-[var(--main-color)] text-white text-sm placeholder:text-white/40 focus:outline-hidden focus:shadow-[0_0_15px_var(--main-color)] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-usman w-full py-3.5 text-base font-bold cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
