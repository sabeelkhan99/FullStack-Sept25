import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Card, Row, Col, Typography, Spin, Tag } from 'antd';
import useHttp from '../hooks/useHttp';
import { fetchMovieById } from '../lib/apis';

const { Title, Text } = Typography;

const ShowMovie = () => {
  const { id } = useParams();
  const { data, isLoading, error, sendRequest } = useHttp(fetchMovieById, true);

  useEffect(() => {
    if (id) {
      sendRequest(id);
    }
  }, [id]);

  const movie = data?.payload;

  return (
    <div
      style={{
        padding: '24px 16px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {isLoading && (
        <div style={{ textAlign: 'center', padding: 48 }}>
          <Spin size="large" />
        </div>
      )}

      {error && !isLoading && (
        <Card>
          <Text type="danger">{error}</Text>
        </Card>
      )}

      {movie && !isLoading && (
        <Card
          style={{
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          <Row gutter={[32, 24]}>
            <Col xs={24} md={9}>
              <div
                style={{
                  aspectRatio: '2/3',
                  overflow: 'hidden',
                  background: '#1a1a1a',
                  borderRadius: 8,
                }}
              >
                <img
                  alt={movie.title}
                  src={movie.posterUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Col>

            <Col xs={24} md={15}>
              <div style={{ marginBottom: 12 }}>
                <Title level={2} style={{ marginBottom: 4 }}>
                  {movie.title}
                </Title>
                {movie.runtime && (
                  <Text type="secondary">
                    {movie.runtime} min
                  </Text>
                )}
              </div>

              {movie.description && (
                <div style={{ marginBottom: 24 }}>
                  <Title level={5} style={{ marginBottom: 8 }}>
                    About the movie
                  </Title>
                  <Text>{movie.description}</Text>
                </div>
              )}

              {Array.isArray(movie.cast) && movie.cast.length > 0 && (
                <div>
                  <Title level={5} style={{ marginBottom: 12 }}>
                    Cast
                  </Title>
                  <Row gutter={[16, 16]}>
                    {movie.cast.map((member) => (
                      <Col key={member._id} xs={12} sm={8} md={6}>
                        <div
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: 96,
                              height: 96,
                              margin: '0 auto 8px',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              background: '#1a1a1a',
                            }}
                          >
                            <img
                              alt={member.name}
                              src={member.profilePicture}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                          <div style={{ fontWeight: 500 }}>{member.name}</div>
                          {member.alias && (
                            <Tag
                              color="default"
                              style={{
                                marginTop: 4,
                                fontSize: 11,
                              }}
                            >
                              as {member.alias}
                            </Tag>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default ShowMovie;

