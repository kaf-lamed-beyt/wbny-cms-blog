import React from "react";
import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";
import { Card } from "./style/blogcard.styled";

const BlogCard = ({
  data: {
    slug,
    featuredImage,
    title,
    description,
    createdBy: { displayName },
    createdOn,
  },
}) => {
  return (
    <Link href={`/${slug}`} passHref>
      <Card>
        <div className="featured-image">
          <Image
            src={featuredImage}
            height={100}
            width={100}
            alt={title}
            placeholder="blur"
            blurDataURL
          />
        </div>
        <div className="card-info">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="author-date">
            <p className="date">{createdOn}</p>
            <p className="author">{displayName}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  data: propTypes.array.isRequired,
};
