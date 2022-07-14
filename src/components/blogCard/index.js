import React from "react";
import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";
import { Card } from "./style/blogcard.styled";

const BlogCard = ({ data }) => {
  return (
    <Link href={`/${data.slug}`} passHref>
      <Card>
        <div className="featured-image">
          <Image
            src={data.featuredImage}
            height={100}
            width={100}
            alt={data.title}
            placeholder="blur"
            blurDataURL
          />
        </div>
        <div className="card-info">
          <p className="title">{data.title}</p>
          <p className="description">{data.description}</p>
          <div className="author-date">
            <p className="date">{data.createdOn}</p>
            <p className="author">{data.createdBy.displayName}</p>
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
