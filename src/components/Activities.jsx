import { useState } from "react";
import "../styles/activities.css";

function Activities() {
  const [activeTab, setActiveTab] = useState("activities");

  const activityItems = [
    {
      title: "Delegate",
      category:
        "Nigerian International Secondary Schools Model United Nations (NISSMUN), 📍Abuja, Nigeria",
      year: "September 2021",
      points: [
        "Researched and analyzed international issues to prepare position papers and policy-based solutions.",
        "Collaborated with over 50 international delegates to draft, negotiate, and amend resolutions.",
        "Contributed to the successful passage of 3 resolutions through teamwork, diplomacy, and communication.",
      ],
    },
    {
      title: "Student Life and Funding Committee",
      category: "MUN Student Union, 📍St John's, NL",
      year: "September 2024 - December 2024",
      points: [
        "Supported oversight of membership structures within the Students' Union, including clubs, societies, and resource centres.",
        "Helped administer grants and funding to student groups and membership bodies.",
        "Coordinated large student events, including Winter Carnival and Welcome Week activities.",
      ],
    },
    {
      title: "Children Summer Camp Volunteer",
      category: "Mount Zion Church, 📍St John's, NL",
      year: "August 2024, August 2025",
      points: [
        "Assisted in organizing and facilitating sports, group games, and arts & crafts activities for mixed-age groups of children throughout a week-long summer camp.",
        "Supervised and engaged participants to ensure a safe, inclusive, and enjoyable environment for all attendees.",
        "Collaborated with fellow volunteers and church staff to coordinate daily activities and maintain a structured camp schedule.",
      ],
    },
  ];

  const interestItems = [
    {
      title: "Swimming",
      image:
        "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Taking Walks",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Eating Pasta",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Reading",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dancing",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Going to the Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Perfumes",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Running",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Skincare",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Music",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="activities" className="activities-section">
      <div className="activities-container">
        <div className="activities-heading">
          <h2>Activities</h2>
        </div>

        <div className="activities-tabs">
          <button
            type="button"
            className={`activities-tab ${
              activeTab === "activities" ? "active" : ""
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </button>

          <button
            type="button"
            className={`activities-tab ${
              activeTab === "interests" ? "active" : ""
            }`}
            onClick={() => setActiveTab("interests")}
          >
            Hobbies
          </button>
        </div>

        {activeTab === "activities" ? (
          <div className="activities-stack" key="activities">
            {activityItems.map((item, index) => (
              <article className="activity-card" key={index}>
                <div className="activity-card-top">
                  <div className="activity-card-top-left">
                    <h3>{item.title}</h3>
                    <p className="activity-category">{item.category}</p>
                  </div>

                  <p className="activity-year">{item.year}</p>
                </div>

                <div className="activity-card-divider"></div>

                <div className="activity-card-body">
                  {item.points ? (
                    <ul className="activity-points">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="activity-text">{item.text}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="hobbies-cloud" key="interests">
            {interestItems.map((item, index) => (
              <div
                className={`hobby-bubble hobby-bubble-${index + 1}`}
                key={index}
              >
                <div
                  className="hobby-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <span className="hobby-label">{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Activities;