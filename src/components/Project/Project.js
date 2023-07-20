import "./Project.css";

function Project() {
  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__line"></div>
      <article className="project__article">
        <div className="project__article-column">
          <h3 className="project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__article-column">
          <h3 className="project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>
      <div className="project__timeline-container">
        <span className="project__timeline-item project__timeline-item_type_backend">
          1 неделя
        </span>
        <span className="project__timeline-item project__timeline-item_type_frontend">
          4 недели
        </span>
        <span className="project__timeline-item project__timeline-item_type_caption">
          Back-end
        </span>
        <span className="project__timeline-item project__timeline-item_type_caption">
          Front-end
        </span>
      </div>
    </section>
  );
}

export default Project;
